export const name="space_bar";
export const id="dl_72bd4634d18c29e3031d";
export const url=new URL("../icons/space_bar.svg?v=748be9e26dca09d463309bbf3c82b81b48d9f5008704e1ee5a232db6d7308a0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
