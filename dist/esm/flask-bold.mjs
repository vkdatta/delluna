export const name="flask-bold";
export const id="dl_f4d7c256f21941ea981d";
export const url=new URL("../icons/flask-bold.svg?v=d58a318c51d1c4385cda4e890c29f43d3f8f31b0ee7aabce2156e95d29c8db68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
