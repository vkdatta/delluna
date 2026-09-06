export const name="arrow-fat-lines-up-thin";
export const id="dl_442c71a6c76b480a8947";
export const url=new URL("../icons/arrow-fat-lines-up-thin.svg?v=f055227d17c79192a1d6ab5c547c5314ff159d709d8cbb069260c11c9c45202c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
