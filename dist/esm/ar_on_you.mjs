export const name="ar_on_you";
export const id="dl_9d8e5d304b4a6c35cec0";
export const url=new URL("../icons/ar_on_you.svg?v=182111c5813e04ac9eee20a1fc31b0947e8eec9c7310464b58973f42e5ede9c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
