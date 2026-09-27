export const name="table-properties";
export const id="dl_535c7ffad9ab499db478";
export const url=new URL("../icons/table-properties.svg?v=51072ef163f05cdd11e86de9154bb8477723723f7e4201ccd13f2cc1b08342ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
