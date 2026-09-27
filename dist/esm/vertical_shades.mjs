export const name="vertical_shades";
export const id="dl_6165a155f5b8235bab16";
export const url=new URL("../icons/vertical_shades.svg?v=088d49bad2104dd2e98da926154b744d190ce83d004438c959e779e783b57ef6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
