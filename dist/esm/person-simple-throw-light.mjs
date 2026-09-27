export const name="person-simple-throw-light";
export const id="dl_8c3df8f0d2094f918979";
export const url=new URL("../icons/person-simple-throw-light.svg?v=e75014cabed70ce4c98d0730016b69fce96aad5b36a57cd31e7631320bfc677e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
