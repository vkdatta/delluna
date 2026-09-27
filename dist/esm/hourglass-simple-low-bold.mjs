export const name="hourglass-simple-low-bold";
export const id="dl_6c74761d7e084c4f9441";
export const url=new URL("../icons/hourglass-simple-low-bold.svg?v=edc40ac262a0d176c882ce0a324cc28f72f332b28f3bb4b352652325a31a4dfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
