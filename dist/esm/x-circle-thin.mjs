export const name="x-circle-thin";
export const id="dl_dc10432bc8fe69c54f4d";
export const url=new URL("../icons/x-circle-thin.svg?v=49a8b33d6745a0a9f17b832dd61610e540133ccfc9ad450e12b6466164a21513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
