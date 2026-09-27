export const name="notches-bold";
export const id="dl_43df5b95c37a4844aa88";
export const url=new URL("../icons/notches-bold.svg?v=bd93f1345bce2b7a6d4c95c2762c805d374cc93cce38a578ee97bc8a4efee20a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
