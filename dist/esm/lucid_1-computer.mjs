export const name="lucid_1-computer";
export const id="dl_76e82f85969a4e44b390";
export const url=new URL("../icons/lucid_1-computer.svg?v=f358c8106476626fa8e076732db1fc3bda8f4bb7ec88655edcca56ecf8a6b7b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
