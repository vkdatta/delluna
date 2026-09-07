export const name="chat-teardrop-slash-fill";
export const id="dl_fa4e833d57c44de9b013";
export const url=new URL("../icons/chat-teardrop-slash-fill.svg?v=bc7ab934911ec2e7a9572fc9311ac9adbc20ba8cb261bc6cd442951efef9f1c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
