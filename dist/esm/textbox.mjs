export const name="textbox";
export const id="dl_2a641f1efa52c0c31a9b";
export const url=new URL("../icons/textbox.svg?v=1263612387bd17f0d68fd28c264e3da118edeef88d493b8d6e4ff32cfbebaa79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
