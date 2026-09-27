export const name="picture_in_picture_medium-fill";
export const id="dl_6c66f2345b08224a0e3d";
export const url=new URL("../icons/picture_in_picture_medium-fill.svg?v=ed36acb2cdc8c1fd1c126be4f7eac67b3de02a2bb93cf8e6672def9c44de5d51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
