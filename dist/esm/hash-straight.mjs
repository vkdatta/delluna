export const name="hash-straight";
export const id="dl_d79bf25998e14834852b";
export const url=new URL("../icons/hash-straight.svg?v=83fcee515cc89ec8d69eb6d8364f40b1cbdb12e52e6f59a97b48f42f89da0adb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
