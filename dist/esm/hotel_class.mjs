export const name="hotel_class";
export const id="dl_7d2d8f2375009194ccbd";
export const url=new URL("../icons/hotel_class.svg?v=6a7b308b9716baaf99ed7987794e4c7be6c1fca06f4b6704a79d2bbe1ee1e4b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
