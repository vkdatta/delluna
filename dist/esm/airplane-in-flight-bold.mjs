export const name="airplane-in-flight-bold";
export const id="dl_65a927240b8d4467a61f";
export const url=new URL("../icons/airplane-in-flight-bold.svg?v=fc01b6972aa17764c8fa93f13fada8c7b4395090b3d8281950873fe9592ff250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
