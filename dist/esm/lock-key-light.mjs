export const name="lock-key-light";
export const id="dl_c5c5f321af4a46a1bbb1";
export const url=new URL("../icons/lock-key-light.svg?v=dd893d48a1b471e1afb991cf07ebac56fd0d86b7d95ae35b8920e155594de9eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
