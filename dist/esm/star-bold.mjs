export const name="star-bold";
export const id="dl_1931333093fdad953acf";
export const url=new URL("../icons/star-bold.svg?v=79328a2968de51a0a7b604766446c174ca63f8e32a1b3f45b0975c1069b6ab20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
