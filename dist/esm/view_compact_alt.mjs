export const name="view_compact_alt";
export const id="dl_43c8391a2cdfa92874b9";
export const url=new URL("../icons/view_compact_alt.svg?v=39cc7265c98cac0af17231a80418cb80476263a247e906e866cbaddae0d0aab0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
