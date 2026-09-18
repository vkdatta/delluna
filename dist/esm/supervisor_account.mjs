export const name="supervisor_account";
export const id="dl_1670af09e035461f889c";
export const url=new URL("../icons/supervisor_account.svg?v=26be7fb42b5db5823a43a4ced01285851bf036cf2dac125db21e562f8635c06c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
