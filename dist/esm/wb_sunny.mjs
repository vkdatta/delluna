export const name="wb_sunny";
export const id="dl_7d9b7cd4a4e5401e9e46";
export const url=new URL("../icons/W/wb_sunny.svg?v=b59abe96670689a41ece475c87a110d3fe9af563c4e1546c87dd18ee8940c9d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
