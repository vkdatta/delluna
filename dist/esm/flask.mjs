export const name="flask";
export const id="dl_a054e70ece9443eeb443";
export const url=new URL("../icons/flask.svg?v=bf95f8e3060aa219d03d8573b0249b6f210b7a11f1ca63f32c933377a3a77a11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
