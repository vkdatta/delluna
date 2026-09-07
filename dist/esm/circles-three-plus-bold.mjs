export const name="circles-three-plus-bold";
export const id="dl_ff93c1899d4046cfb73e";
export const url=new URL("../icons/circles-three-plus-bold.svg?v=41ec71edd159c1483232e80bb6a51ffdbbd1d336423857ad40468a8ff3e6c162",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
