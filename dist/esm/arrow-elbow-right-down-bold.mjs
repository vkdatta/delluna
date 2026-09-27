export const name="arrow-elbow-right-down-bold";
export const id="dl_d6928bd48ef740cfb604";
export const url=new URL("../icons/arrow-elbow-right-down-bold.svg?v=f91b5ce3bbc7a9031921400ee70a629d9da7400adf8f3b55527980d5fa5789ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
