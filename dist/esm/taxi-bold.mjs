export const name="taxi-bold";
export const id="dl_50baaf1c33def405f5a8";
export const url=new URL("../icons/taxi-bold.svg?v=6e2334df9c46daad38a2331652235e8aca9834ae9f1610aeda27ba31bdbac1bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
