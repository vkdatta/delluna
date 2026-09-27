export const name="add_location";
export const id="dl_6b4bb658de705a098335";
export const url=new URL("../icons/add_location.svg?v=1465e3fc9c76ff2968c20d68c5f31f0dc76eb1ac707c26630dfaa82e0a3bce6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
