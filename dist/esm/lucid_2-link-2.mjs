export const name="lucid_2-link-2";
export const id="dl_984bfef8abdf48f79539";
export const url=new URL("../icons/lucid_2-link-2.svg?v=d149fb5171cc4400eaaf07af15fb83299e666a8277d621120a02d0a897605aa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
