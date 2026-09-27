export const name="file-csv-light";
export const id="dl_61f729be7f284974ad2a";
export const url=new URL("../icons/file-csv-light.svg?v=8697ecf5b404eda74160529f5157992ffee86137c9acae4b110f7a54d682025c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
