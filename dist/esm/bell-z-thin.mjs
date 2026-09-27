export const name="bell-z-thin";
export const id="dl_ec1bedb67f9c424fb84f";
export const url=new URL("../icons/bell-z-thin.svg?v=d07c68e3f0861dc2748a04ce636130bffb239e0c14fb5b99bde35d6e727036e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
