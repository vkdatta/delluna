export const name="shovel";
export const id="dl_204ec3775f6db5dff87c";
export const url=new URL("../icons/shovel.svg?v=768447ab861ba6612c6e28cc7f0c356e85782a8a78fd744017a70b7617b306d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
