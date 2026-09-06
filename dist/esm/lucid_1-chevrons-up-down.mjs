export const name="lucid_1-chevrons-up-down";
export const id="dl_6bb6cc67ca7343028dc6";
export const url=new URL("../icons/lucid_1-chevrons-up-down.svg?v=70aa7693996b3e828aa6f09823acc6b1cae9cb7d332dc9e3895aeb8f9e202741",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
