export const name="first-aid-thin";
export const id="dl_cfd12b4967d9416ca904";
export const url=new URL("../icons/first-aid-thin.svg?v=18e7646fd5550292deb2fdd6c55ccf4a55558c4a27164022909412d0268eb1b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
