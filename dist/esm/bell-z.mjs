export const name="bell-z";
export const id="dl_07e9e0cacbd94c24a434";
export const url=new URL("../icons/bell-z.svg?v=a3ed939c65b0ea9401876ee0d933e0016e1fd1db0d2ef2917b4efe5b0bc456a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
