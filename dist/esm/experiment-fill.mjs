export const name="experiment-fill";
export const id="dl_e26418f233214f788287";
export const url=new URL("../icons/E/experiment-fill.svg?v=12c589d285ac2b0b118ea6b2e5b352582bfb68a145218bece6ec03a2fccd15f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
