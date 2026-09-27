export const name="line_end_arrow_notch";
export const id="dl_cafd738d2d51502f77f8";
export const url=new URL("../icons/line_end_arrow_notch.svg?v=7eddee5b2662f787f84fea6821c2cf5b60115858d21d257e5bc0e6e73918d41d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
