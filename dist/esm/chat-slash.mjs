export const name="chat-slash";
export const id="dl_b9af0bec718143229fc7";
export const url=new URL("../icons/chat-slash.svg?v=a1b4de396276eed52163b26632f02cc839d886463c050475f144b567571a4cb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
