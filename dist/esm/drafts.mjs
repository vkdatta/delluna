export const name="drafts";
export const id="dl_cc516e8e1b5b87ecd5c9";
export const url=new URL("../icons/drafts.svg?v=a8c57bae0241f0330f63caaa826bd245c800f4c4e1517c9f5dfe5d5c2d741b29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
