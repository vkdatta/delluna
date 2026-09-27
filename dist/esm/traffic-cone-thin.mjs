export const name="traffic-cone-thin";
export const id="dl_0dbe041bb95d7e31bee7";
export const url=new URL("../icons/traffic-cone-thin.svg?v=bba2fd56f82d291f1ea89d5d6919e81b46c3a29cf465920f65913e0b5628d6fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
