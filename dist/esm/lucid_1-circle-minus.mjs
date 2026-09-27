export const name="lucid_1-circle-minus";
export const id="dl_1fd9f882658b4cc9a590";
export const url=new URL("../icons/lucid_1-circle-minus.svg?v=319e1c7beadbabca46dfe2d186634b1ef59de49e2dd18b439622b4f76ad86051",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
