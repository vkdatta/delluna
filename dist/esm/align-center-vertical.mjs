export const name="align-center-vertical";
export const id="dl_4e49e15b0bf44bd49815";
export const url=new URL("../icons/align-center-vertical.svg?v=da0ce9e796fbb26edc3562026db5dcc892c111c02ac9f679085357a62b8d87d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
