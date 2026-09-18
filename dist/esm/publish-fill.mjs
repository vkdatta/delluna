export const name="publish-fill";
export const id="dl_b3162e787c1a471aa5ca";
export const url=new URL("../icons/publish-fill.svg?v=1a79b9c68a43f8c3f094ec12690263644cf0bbcedb0edc1b767ca2705d047cb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
