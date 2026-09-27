export const name="hov";
export const id="dl_6dbc7c24c594353266d4";
export const url=new URL("../icons/hov.svg?v=e371cadadeb9ee12d520e4979261b149fe05db64a83b6f194c1791d6a1a227d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
