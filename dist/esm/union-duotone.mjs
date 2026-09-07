export const name="union-duotone";
export const id="dl_db4c88dab1644f259349";
export const url=new URL("../icons/U/union-duotone.svg?v=e2f0dea0e3be8f678f423f9363707220442eca83f1b2995b10a5c83bd47e5522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
