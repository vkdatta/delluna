export const name="circles";
export const id="dl_5d78dfddae0a4d708c55";
export const url=new URL("../icons/C/circles.svg?v=0aa12e1fcb66564ab5a9d48bf9d98cd434b55a6daf7c7182ac34661c574814a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
