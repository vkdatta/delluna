export const name="file-dashed-bold";
export const id="dl_7e97c989a3e649db9d51";
export const url=new URL("../icons/file-dashed-bold.svg?v=2cc87d5ab6e4a6982026296025623bb5323c2fb9db9e2bf9a9efa70329f29339",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
