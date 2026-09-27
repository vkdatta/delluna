export const name="align-left-simple-thin";
export const id="dl_d0988c60207a41c8806b";
export const url=new URL("../icons/align-left-simple-thin.svg?v=ae225d528245248e408fb068254c34839165bffa97643536eb7e30657b9e218e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
