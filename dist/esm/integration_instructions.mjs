export const name="integration_instructions";
export const id="dl_10123b5482dbb5bec0a6";
export const url=new URL("../icons/integration_instructions.svg?v=dea4d10a77b6af5380e5c56107b53444a9a57bc4f8f43af7b9c9c4d786405529",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
