export const name="corporate_fare";
export const id="dl_1b8c31e6cf5a487194bb";
export const url=new URL("../icons/C/corporate_fare.svg?v=248d0f72b301671bb02be37204709b17e31a9e51f470494c4e5e236059197ac4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
