export const name="arrow-elbow-right-down-bold";
export const id="dl_d6928bd48ef740cfb604";
export const url=new URL("../icons/arrow-elbow-right-down-bold.svg?v=915619b21f7e6c74bfdd996656f1817cedd0633face71493f5e24a39cc7f6a29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
