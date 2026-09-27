export const name="massage-fill";
export const id="dl_83ab53c3c34cb8d5759c";
export const url=new URL("../icons/massage-fill.svg?v=4b7f974df82b2e1f2c1e29614c1621c1ec0a8a12b838ef859cc38b7f52ce04cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
