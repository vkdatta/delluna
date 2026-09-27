export const name="horizontal_split-fill";
export const id="dl_1a7a7cfd8cfa15b74d24";
export const url=new URL("../icons/horizontal_split-fill.svg?v=228a2dbc06f0a6a4b1ff92d6cffd9ea203cc8af0ebf2d87d0c8274ad36564af4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
