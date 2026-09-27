export const name="local_library";
export const id="dl_6cadd99f62f700a5b33e";
export const url=new URL("../icons/local_library.svg?v=c05d120c65e2303e135c2c8f4032e386d99192f93cfc22453781b2a833af788f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
