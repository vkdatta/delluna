export const name="arrow-up-right-light";
export const id="dl_5eca910667e44363a56f";
export const url=new URL("../icons/arrow-up-right-light.svg?v=037d5003dc04c20a4f93c4f0871de277c26c0c0ad97551b4a9379df4dcaefdc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
