export const name="keyboard-light";
export const id="dl_c746794866904e098343";
export const url=new URL("../icons/keyboard-light.svg?v=e0c6a27568a57dbc3ec2a5d08c8412ded8fe73a431d113c8040b9e5755db2894",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
