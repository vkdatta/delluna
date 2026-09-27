export const name="garage_door";
export const id="dl_409319a00ce4e7365430";
export const url=new URL("../icons/garage_door.svg?v=271672977312a4c4b99aa99d7f71e63688af36a74613b5ed0c7bfad7f6d5b70e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
