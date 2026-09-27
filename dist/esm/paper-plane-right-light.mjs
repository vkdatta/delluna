export const name="paper-plane-right-light";
export const id="dl_59497547903b49d29e9e";
export const url=new URL("../icons/paper-plane-right-light.svg?v=cda95ae85c42eb87d7d31042457cf8917c4f9d1cd3461a09012c7181dff0654a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
