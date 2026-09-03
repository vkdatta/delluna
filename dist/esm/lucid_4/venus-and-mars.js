export const name="venus-and-mars";
export const id="dl_ea756cbab4a74ad6a253";
export const url=new URL("../../icons/lucid_4/venus-and-mars.svg?v=be8e2a56ba168c1fd80245328cb422e48b8cb14c0c45e3d5770e6c6c869815bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
